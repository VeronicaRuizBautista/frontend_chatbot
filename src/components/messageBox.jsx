export function MessageBox ({sender, message}) {
    return (
        <div className={`p-4 justify-center items-center rounded-2xl inline-block max-w-[70%] ${sender == "user" ? "bg-light-orange ml-auto self-end rounded-br-none" : "bg-white mr-auto self-start rounded-bl-none"}`}>
            <p className="text-wrap">{message}</p>
        </div>
    )
}
