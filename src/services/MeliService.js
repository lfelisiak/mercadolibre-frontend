import Service from "service/Service";
import ApiMeli from "config/ApiMeli";

export default class MeliService extends Service{
    constructor(){
        super(ApiMeli);
    }
    
    setHeader = (key,value) => {
        this.options.headers[key] = value;
    }
    
    getItems = async (path, parameters = null) => {
        return await this.get(path);
    }

    getItem = (path, parameters = null) => {
        return await this.get(path);
    }


}