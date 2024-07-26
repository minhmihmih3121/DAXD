import { memo } from "react";

const HomePage = () => {
    return (
        <div>
            <h1>Header</h1>
            <h1>Body</h1>
            <h1>Footer</h1>
        </div>
    );
}

export default memo(HomePage);