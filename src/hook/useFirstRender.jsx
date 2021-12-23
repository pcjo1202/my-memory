import { useEffect, useRef } from 'react'

const useFirstRender = callback => {
  const firstRender = useRef(true)

  useEffect(
    () => {
      if (firstRender.current) {
        // 처음 렌터링 될 때 true 값을 false 값으로 바꿈 (처음 렌더링 될때만 동작하지 않음)
        firstRender.current = false
        return null
      } else {
        callback()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback]
  )
}

export default useFirstRender
