import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { styles } from '@/assets/styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { PokemonFavoriteContext } from "../app/context/pokemon";

export default function Filter() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const { state, selectFilter } = useContext(PokemonFavoriteContext)
    const { filterOptions, filterSelected } = state
    return (
        <View style={styles.filterSelectionContainer}>
        <DropDownPicker
            open={open}
            value={value}
            items={filterOptions}
            setOpen={setOpen}
            setValue={setValue}
            setItems={filterOptions}
            placeholder="Select a pokemon type"
            listMode="SCROLLVIEW"
            style={styles.filterDropdown}
            onChangeValue={(value) => selectFilter(value)}
        />
        </View>
    );
}