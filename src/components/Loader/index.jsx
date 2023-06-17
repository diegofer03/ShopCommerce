
import { useApp } from '../../hooks/useProviderApp'
function Loader() {
  const {loading} = useApp()

  return (
    <div className={`${loading ? 'block' : 'hidden'} bg-gray-500 opacity-70 w-[100vw] h-[100vh] absolute z-50`}>
    </div>
  )
}

export default Loader