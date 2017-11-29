import Loadable from 'react-loadable';
import MyLoadingComponent from './Loading';

const asyncTempalte = (loaderFunc) => {
    return Loadable({
        loader: loaderFunc,
        loading: MyLoadingComponent
    });
};

export default asyncTempalte;
