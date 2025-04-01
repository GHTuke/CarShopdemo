export type TCar = {
    brand: string;
    model: string;
    color: string;
    fuel: string;
    modelYear: string;
    price: string;
    _links: {
        self: {
            href: string;
        }
    }
}

export type TCarShort = {
    brand: string;
    model: string;
    color: string;
    fuel: string;
    modelYear: Number;
    price: Number;
}

export type TAddCarProps = {
    addCar: (car: TCarShort) => void;
}

export type TEditCarProps = {
    currentCar: TCar;
    editCar: (car: TCarShort, url: string) => void;
}