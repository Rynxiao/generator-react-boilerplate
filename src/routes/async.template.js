/* eslint arrow-body-style:0 */

import Loadable from 'react-loadable';
import MyLoadingComponent from './Loading';

const asyncTemplate = loaderFunc => {
    return Loadable({
        loader: loaderFunc,
        loading: MyLoadingComponent
    });
};

export default asyncTemplate;
