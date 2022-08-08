import React,{useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';

function TestScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('select');
  const [items, setItems] = useState([
    {label: 'All', value: 'select'},
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker
    style={{width:155}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

export default TestScreen;