
export function Space({ children, shape }) {
    return (
        <div class="h-100 p-1">
            <div class="h-100 bg-secondary-subtle bg-gradient rounded">
                <span class="d-block text-secondary position-relative translate-middle top-50 start-50">
                    {children}
                </span>
            </div>
        </div>
    );
};

export function MeetingTable({children}){
    return (
        <div class="h-100 p-3">
            <div class="h-100 bg-primary-subtle bg-gradient rounded bg-gradient">
                <span class="d-block text-secondary position-relative translate-middle top-50 start-50">
                    {children}
                </span>
            </div>
        </div>
    );
}

export function CircleTable({children}){
    return (
        <div class="h-100 p-5">
            <div class="bg-primary-subtle bg-gradient rounded-circle ratio ratio-1x1 position-relative translate-middle top-50 start-50">
                <div class="h-100 w-100">
                    <span class="position-absolute top-50 start-50 translate-middle d-inline-block">{children}</span>
                </div>
            </div>
        </div>
    );
}



//     <div {...shape=="circle" ? "class=\"bg-primary-subtle rounded-circle w-100 ratio ratio-1x1\"" :"class=\"bg-primary-subtle h-100 rounded\""}>
