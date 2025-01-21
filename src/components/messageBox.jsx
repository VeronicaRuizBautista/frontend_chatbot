export function MessageBox ({sender, message}) {
    return (
        <div className={`p-3 justify-center items-center rounded-xl inline-block min-h-[50px] max-w-[70%] ${sender == "user" ? "bg-light-orange ml-auto" : "bg-white mr-auto"}`}>
            <p>{message}</p>
        </div>
    )
}
