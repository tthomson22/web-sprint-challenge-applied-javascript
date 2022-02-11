const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dateInfo = document.createElement('span')
  const titleInfo = document.createElement('h1')
  const tempInfo = document.createElement('span')

  dateInfo.textContent = date
  titleInfo.textContent = title
  tempInfo.textContent = temp

  header.appendChild(dateInfo)
  header.appendChild(titleInfo)
  header.appendChild(tempInfo)

  header.classList.add('header')
  dateInfo.classList.add('date')
  tempInfo.classList.add('temp')

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('BloomTech Times', 'Febuary 10, 2022', '58F'))
}

export { Header, headerAppender }
