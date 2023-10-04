export function Option({
  index,
  answer,
  handleClickOption,
  isSelected,
  src,
  optionText,
}) {
  return (
    <li 
      onClick={() => handleClickOption(index)}
      className="flex flex-col px-8 py-[46px] bg-gray-5 rounded-lg w-[250px] border-x-[3.194px] border-t-[3.194px] border-b-[6.387px] ease-in-out duration-300 cursor-pointer hover:bg-gray-4">
      {/* <img src="" alt="" /> */}
      <img className="w-full" src={`./src/assets/ilustrations/${src}.png`} alt="" />
      <span className="text-center text-base font-normal leading-[17.6px] mt-6">
        {optionText}
      </span>
    </li>
  );
}
