export function Item() {
  return (
    <div
      className={`h-[6.25rem] border-2 border-black bg-blue-300 mb-10 p-10
        flex justify-start items-center
        text-xl tracking-wide`}
    >
      <input type="checkbox" className="w-[2.5rem] h-[2.5rem] mr-[0.625rem]" />
      <p>待办事项</p>
    </div>
  );
}
