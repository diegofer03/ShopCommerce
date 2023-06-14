// eslint-disable-next-line react/prop-types
function Layout({children}) {
  const styles = {
    container: {
      height: '86vh'
    }
  }
  return (
    <div className="flex flex-col items-center" style={styles.container}>
        {children}
    </div>
  )
}

export default Layout