
Import React from "react";
Import { ButtonProps) from "@/interfaces";
const Button: React.FC<ButtonProps> = ({title, styles}) =>{
return (
<button className-["bg-blue-600 px-3 w-auto h-[27px] text-white ${styles}"}>
  {title}
</button>
);
}
export default Button;

