import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import {connect} from 'react-redux'
import styles from './style.module.css'

const Calculate = (props) => {
    const { config } = props
    const [unit , setUnit] = useState(0)
    const [validateUnit, setValidateUnit] = useState(false)
    const [result, setResult] = useState(0)

    const handleValidateUnit = (unitInput) => {
        setValidateUnit(!Number(unitInput))
    }

    const handleUnit = (unitInput) => {
        handleValidateUnit(unitInput)
        setUnit(unitInput)
    }
    
    const calculate = () => {

      const between = (x, min, max) => {
        return x >= min && x <= max;
      }
    
      switch (true) {
        case between(unit, 101, 150):
          return (unit * config.unit101_150 )

        case between(unit, 151, 400):
          return (unit * config.unit151_400 )

        case (unit > 400):
          return (unit * config.unit401 )

        default:
          return 0
      }
    }

  return (
    <div className={styles.main}>
      <TextField 
        id="outlined-basic" 
        label="หน่วย/kW" 
        variant="outlined" 
        error={validateUnit}
        value={unit}
        onChange={(e) => {handleUnit(e.target.value)}}
      />
      <div className={styles.button}>
        <Button 
          variant="contained"
          onClick={() => {setResult(calculate())}}> คำนวณ </Button>
      </div>
      
      <span>{ result } บาท </span>
    </div>
  )
}

const mapStateToProps = state => ({
  config: state.config
})

export default connect(mapStateToProps)(Calculate)
