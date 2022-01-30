function SideCard(props) {
  const { title, content } = props;
  return (
    <div className="w-2/5 whitespace-normal ">
      <h1 className="font-header-font text-[44px] text-[#23272a] leading-[120%] font-bold">
        {title}
      </h1>
      <p className=" mt-[20px] text-[#23272a] text-[14px] leading-[1.625]">
        {content}
      </p>
    </div>
  );
}

export default SideCard;
