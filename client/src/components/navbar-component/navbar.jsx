import styles from './Navbar.module.css'

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div id={styles.navbar}>
            <div className={styles.title}>
                {/* Link to the home page here! */}
            </div>
        </div>
    )
}

// Export the NavBar, and import it in pages/_app.jsx to render it on all pages of your website!