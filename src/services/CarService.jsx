class CarService {
    getData = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }
        return await res.json();
    }
    getAllCars = async (carUrl) => {
        const res = await this.getData(carUrl);
        return res.map(this._transformCars);
    }
    _transformCars = (res) => {
        return {
            id: res.id,
            photo: res.imageUrl,
            ownerFirstName: res.ownerFirstName,
            name: res.name,
        }
    }
}

export default CarService;