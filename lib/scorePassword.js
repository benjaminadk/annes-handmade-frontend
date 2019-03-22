export default value => {
  let pwd = 0
  const reCapital = /[A-Z]/
  const reDigit = /[0-9]/
  const reSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  const reEverything = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  if (value.length >= 8) pwd += 1
  if (reCapital.test(value)) pwd += 1
  if (reDigit.test(value)) pwd += 1
  if (reSpecial.test(value)) pwd += 1
  if (reEverything.test(value)) pwd += 1
  return pwd
}
