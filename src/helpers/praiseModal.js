export const praiseModal = (counter, act) => {
  const countForPrise = [5, 8, 10, 20, 50];

  let message = null;

  if (counter === 1) {
    switch (act) {
      case 'signin':
        message = 'We are glad to see you here!';
        break;
      case 'favorite':
        message = 'Wow! You have added the first recipe to your favorites!';
        break;

      default:
        console.log('Invalid subscription type');
    }
    return message;
  }

  if (countForPrise.includes(counter)) {
    switch (act) {
      case 'signin':
        message = `Wow! You have used the app ${counter} times!`;
        break;
      case 'favorite':
        message = `Wow! You have added ${counter} recipes to your favorites!`;
        break;

      default:
        console.log('Invalid subscription type');
    }
    return message;
  }
  return message;
};
