import React, { useEffect } from 'react'

interface AlertProps {
    message: string
    color: string
    time?: number
    setVisible: Function
}

export default function Alert(props: AlertProps) {

    const { color, message, time, setVisible } = props

    useEffect(() => {
        let timeMin = time ? (time*1000) : 2000
        setTimeout(() => { setVisible(false) }, timeMin)
    }, [])

    return (
        <div className={`alert alert-${color}`} role="alert">
            {message}
        </div>
    )
}