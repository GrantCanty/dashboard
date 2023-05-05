import React from 'react'

/**
 * @description hook for modal the returns state and state mutator
 * @returns {boolean, () => void}
 */
const useModal = (): [boolean, () => void] => {
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