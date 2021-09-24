import React, { useState } from 'react';
import { Autocomplete, FlexCell } from '@epam/promo';
import { useArrayDataSource } from "@epam/uui";

const languageLevels = [
    { "id": 2, "level": "A1" },
    { "id": 3, "level": "A1+" },
    { "id": 4, "level": "A2" },
    { "id": 5, "level": "A2+" },
    { "id": 6, "level": "B1" },
    { "id": 7, "level": "B1+" },
    { "id": 8, "level": "B2" },
    { "id": 9, "level": "B2+" },
    { "id": 10, "level": "C1" },
    { "id": 11, "level": "C1+" },
    { "id": 12, "level": "C2" },
];

export default function BasicExample() {
    const [value, onValueChange] = useState<string>('');

    const dataSource = useArrayDataSource({
        items: languageLevels,
    }, []);

    return (
        <FlexCell width='auto' >
            <Autocomplete
                dataSource={ dataSource }
                value={ value }
                onValueChange={ onValueChange }
                getName={ item => item.level }
                entityName='language level'
            />
        </FlexCell>
    );
}