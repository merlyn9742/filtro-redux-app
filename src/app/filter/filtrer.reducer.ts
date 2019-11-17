import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';


export function filterReducer(state = estadoInicial, 
                            action: fromFiltro.actions): fromFiltro.filtrosValidos {
        switch(action.type){
            case fromFiltro.SET_FILTRO:
                return action.filter;

            default:
                return state;    
        }                            

}