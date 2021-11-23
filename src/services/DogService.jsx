class DogService {
    getData = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }
        return await res.json();
    }
    getAllDogs = async (dogUrl) => {
        const res = await this.getData(dogUrl);
        return res.map(this._transformDogs);
    }
    getDog = async(id) => {
        const res = await this.getData(`https://api.thedogapi.com/v1/breeds/${id}?limit=10&page=0`);
        return this._transformDogs(res);
    }
    _transformDogs = (res) => {
        return {
            id: res.id,
            name: res.name,
            imageUrl: res.image.url,
            temperament: res.temperament
        }
    }
}

export default DogService;