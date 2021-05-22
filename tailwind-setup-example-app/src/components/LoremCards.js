const LoremCards = () => {
  const array = [
    {
      name: "Card",
      value:
        "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value:
        "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      name: "Card",
      value: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-auto flex-wrap justify-around items-center space-y-4 p-4">
        {array.map((value) => (
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-center font-bold underline">{value.name}</h3>
            <p>{value.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoremCards;
