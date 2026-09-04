import React, { useMemo } from 'react'

const SLASH = ' //////////////// '
const BITS = ['01011011010011', '0101000101110', '11010110000001', '00100011110011', '10001100101001', '0100110010101']

export default function Ticker({ reverse = false, className = '' }) {
  const items = useMemo(() => {
    const arr = []
    for (let i = 0; i < 8; i++) arr.push(<span className="ticker__bits" key={'b' + i}>{BITS[i % BITS.length]}</span>, <span className="ticker__slash" key={'s' + i}>{SLASH}</span>)
    return arr
  }, [])
  return (
    <div className={`ticker ${className}`} aria-hidden>
      <div className={`ticker__track ${reverse ? 'is-rev' : ''}`}>{items}{items}</div>
    </div>
  )
}
