import React, {useEffect, useState} from 'react'
import './FilterBar.scss'
import FilterParams from "../FilterParams/FilterParams";
import {Katalog, KatalogFilter} from "../API/getKatalog";
import {useDispatch} from "react-redux";
import Button from "../UI/Button/Button";

function FilterBar({filter_params}) {
    const dispatch = useDispatch();
    const [openList, setOpenList] = useState('');
    const [filterValue, setFilterValue] = useState({
        material: [],
        season: [],
        type: [],
        picture: [],
        gender: [],
        fasteners: [],
        color: []
    })
    return (
        <div className='FilterBar'>
            <div className="FilterBar__container">
                <div className="FilterBar__title">
                    <h1 className='FilterBar__title--text'>фильтр</h1>
                </div>
                <div className="FilterBar__content">
                    <FilterParams
                        title="Материал"
                        paramsList={filter_params.params}
                        keyValue="characteristics_material"
                        binding="material"
                        state={openList == 'material'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                    <FilterParams
                        title="Сезон"
                        paramsList={filter_params.params}
                        keyValue="characteristics_season"
                        binding="season"
                        state={openList == 'season'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                    <FilterParams
                        title="Тип"
                        paramsList={filter_params.params}
                        keyValue="characteristics_type"
                        binding="type"
                        state={openList == 'type'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                    <FilterParams
                        title="Рисунок"
                        paramsList={filter_params.params}
                        keyValue="characteristics_picture"
                        binding="picture"
                        state={openList == 'picture'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                    <FilterParams
                        title="Пол"
                        paramsList={filter_params.params}
                        keyValue="characteristics_gender"
                        binding="gender"
                        state={openList == 'gender'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                    <FilterParams
                        title="Вид застежки"
                        paramsList={filter_params.params}
                        keyValue="characteristics_fasteners"
                        binding="fasteners"
                        state={openList == 'fasteners'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />

                    <FilterParams
                        colorBool={true}
                        title="Цвет"
                        paramsList={filter_params.color}
                        binding="color"
                        state={openList == 'color'}
                        setState={setOpenList}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />

                </div>
                <div className="FilterBar__btn">
                    <div>
                        <Button fun={()=>dispatch(KatalogFilter(filterValue))}>Выбрать</Button>
                    </div>
                    <div>
                        <Button fun={()=>dispatch(Katalog())}>Отменить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
