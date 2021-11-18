import styles from './style.module.css'
import {connect} from 'react-redux'

const DescritonCalulate = (props) => {
    const { config } = props
  return (
    <div>
      <p className={styles.descrition}>
        {
            `ค่าพลังงานไฟฟ้า
            50 หน่วยต่อไป (หน่วยที่ 101 – 150)	หน่วยละ	${config.unit101_150} บาท
            250 หน่วยต่อไป (หน่วยที่ 151 – 400)	หน่วยละ	${config.unit151_400} บาท
            เกินกว่า 400 หน่วย (หน่วยที่ 401 เป็นต้นไป)	หน่วยละ	${config.unit401} บาท`
        }
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
    config: state.config
})
  
export default connect(mapStateToProps)(DescritonCalulate)
