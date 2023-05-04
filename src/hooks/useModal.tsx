import React from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = React.useState<boolean>(false)

    function toggle() {
        setIsShowing(!isShowing)
    }

    return [
        isShowing,
        toggle
    ];
}

export default useModal