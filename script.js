var firstNameInput = document.getElementById('first_name')
var lastNameInput = document.getElementById('last_name')
var describeYourselfInput = document.getElementById('describe_yourself')
var emailInput = document.getElementById('email')
var phoneNumberInput = document.getElementById('phone_number')
var profileParagraph = document.getElementById('profile')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describeYourself = describeYourselfInput.value
  var email = emailInput.value
  var phoneNumber = phoneNumberInput.value

  profileParagraph.innerHTML = 'Hi, my ' + firstName +
  ' ' + lastName +
  ' ' + describeYourself +
  'If youre interested in a date, you can email me at ' + email +
  'or give me a call at ' + phoneNumber
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
describeYourselfInput.addEventListener('textarea', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneNumberInput.addEventListener('input', updateProfile)
