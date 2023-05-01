import { useState } from "react";

function useColorPicker() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const variants = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  
  const [currentColor, setCurrentColor] = useState('red-800');
  const [iconColor, setIconColor] = useState('text-white');
  const [isOpen, setIsOpen] = useState(false);

  const initColor = () => {
    setCurrentColor('red-800');
    setIconColor('text-white');
  };

  const selectColor = (color, variant) => {
    setCurrentColor(`${color}-${variant}`);
    if (variant < 500) {
      setIconColor('text-black');
    } else {
      setIconColor('text-white');
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return {
    colors,
    variants,
    currentColor,
    iconColor,
    isOpen,
    initColor,
    selectColor,
    toggleOpen
  };
}

export default useColorPicker;
