import { InputStyles } from './styles/Input'
import { Pwd, Bar } from './styles/Pwd'

export default function Input({
  showQuality,
  type,
  name,
  value,
  label,
  pwd,
  width,
  togglePasswordType,
  onChange
}) {
  if (showQuality) {
    return (
      <InputStyles width={width} htmlFor={name}>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          spellCheck={false}
          onChange={onChange}
        />
        <div className='toggle' onClick={togglePasswordType}>
          {type === 'password' ? '🙈' : '🐵'}
        </div>
        <Pwd pwd={pwd}>
          Password Quality:
          <Bar pwd={pwd} threshold={0} color='red' />
          <Bar pwd={pwd} threshold={1} color='orangered' />
          <Bar pwd={pwd} threshold={2} color='orange' />
          <Bar pwd={pwd} threshold={3} color='yellow' />
          <Bar pwd={pwd} threshold={4} color='' />
        </Pwd>
      </InputStyles>
    )
  } else {
    return (
      <InputStyles width={width} htmlFor={name}>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          spellCheck={false}
          onChange={onChange}
        />
      </InputStyles>
    )
  }
}
