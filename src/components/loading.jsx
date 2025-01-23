export function Loading () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"  width="30" height="30" className="h-[30px]">
            <circle fill="#ef9e53" stroke="#ef9e53" strokeWidth="15" r="10" cx="40" cy="100">
                <animate 
                    attributeName="opacity" 
                    calcMode="spline" 
                    dur="2s" 
                    values="1;0;1;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="-0.4s" 
                />
            </circle>
            <circle fill="#ef9e53" stroke="#ef9e53" strokeWidth="15" r="10" cx="100" cy="100">
                <animate 
                    attributeName="opacity" 
                    calcMode="spline" 
                    dur="2s" 
                    values="1;0;1;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="-0.2s" 
                />
            </circle>
            <circle fill="#ef9e53" stroke="#ef9e53" strokeWidth="15" r="10" cx="160" cy="100">
                <animate 
                    attributeName="opacity" 
                    calcMode="spline" 
                    dur="2s" 
                    values="1;0;1;" 
                    keySplines=".5 0 .5 1;.5 0 .5 1" 
                    repeatCount="indefinite" 
                    begin="0s" 
                />
            </circle>
        </svg>
    );
};
