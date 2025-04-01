import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ICellRendererParams } from "ag-grid-community";

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { TCar, TCarShort } from "./types";
import { Button } from "@mui/material";
import AddCar from "./AddCar";
import EditCar from "./EditCar";

ModuleRegistry.registerModules([AllCommunityModule]);

const BASE_URL = 'https://car-rest-service-carshop.2.rahtiapp.fi';


function CarShop() {
    const [cars, setCars] = useState<TCar[]>([]);

    const [columnDefs] = useState<ColDef<TCar>[]>([
        { field: 'brand' },
        { field: 'model' },
        { field: 'color' },
        { field: 'fuel' },
        { field: 'modelYear', headerName: 'Year' },
        { field: 'price' },
        {
            cellRenderer: (params: ICellRendererParams<TCar>) => 
                <EditCar
                    currentCar={params.data as TCar}
                    editCar={updateCar}
                />
        },
        {
            field: '_links.self.href',
            headerName: '',
            cellRenderer: (params: ICellRendererParams) => {
                return <Button onClick={() => handleDelete(params.value)} color='error'>Delete</Button>
            }
        },
    ])

    const handleDelete = (url: string) => {
        if (window.confirm('Confirm delete')) {
            deleteCar(url);
        }
    }


    const fetchCars = () => {
        fetch(`${BASE_URL}/cars`)
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(error => console.log(error))
    }

    useEffect(fetchCars, []);

    const deleteCar = (url: string) => {
        const options = {
            method: 'DELETE'
        };

        fetch(url, options)
            .then(() => fetchCars())
            .catch(error => console.log(error))
    }

    const addCar = (car: TCarShort) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        };

        fetch(`${BASE_URL}/cars`, options)
            .then(() => fetchCars())
            .catch(error => console.log(error))
    }

    const updateCar = (car: TCarShort, url: string) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        };

        fetch(url, options)
            .then(() => fetchCars())
            .catch(error => console.log(error))
    }

    return (
        <>
            <AddCar addCar={addCar} />
            <div style={{ height: 700 }}>
                <AgGridReact<TCar>
                    rowData={cars}
                    columnDefs={columnDefs}
                />
            </div>
        </>
    )
}

export default CarShop;