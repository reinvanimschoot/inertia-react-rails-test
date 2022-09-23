import React from 'react';

export default function Index() {
    console.log("RENDER TEST");

    return <div>HELLO WORLD!</div>
}


// This makes sure the component is only rendered once.
// export default React.memo(Index)