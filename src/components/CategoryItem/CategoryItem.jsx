import styles from './style.module.scss'


const CategoryItem = ({title, img, active, onClick}) => {
    return ( 
        <div className={`${styles.wrapper} ${active ? styles.active : ''}`}
        onClick={onClick}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>
            <div className={styles.title}>{title}</div>

        </div>
    );
}

export default CategoryItem;