import React, { useState } from 'react'
import AppBarHeader from '../Header/AppBarHeader';
import BodyContainer from '../Body/BodyContainer';
import ChipsArray from '../Header/ChipsArray';

function MainPage() {

    const [selectedItem, setSelectedItem] = useState([]);
    const [filter, setFilter] = useState([]);

    let check = true;
    if (selectedItem.length === 0)
        check = false;

    return (
        <div>
            <AppBarHeader
                selectedItem={selectedItem} setSelectedItem={setSelectedItem}
                filter={filter} setFilter={setFilter}
            />

            {check ? <ChipsArray selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : ''}

            <BodyContainer selectedItem={selectedItem} setSelectedItem={setSelectedItem}
                filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default MainPage
