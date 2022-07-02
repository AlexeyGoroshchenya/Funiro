
export const sendEmailForm = (form, elem) => {


    const statusBlock = document.createElement('div');


    const loadText = 'The application is sent...';
    const successText = 'Subscription is issued';
    const notValidText = 'Please check the entered data'


    const showSubmitStatus = (str) => {

        elem.append(statusBlock)
        statusBlock.textContent = str


    }

    const showUncorrectInput = (input) => {
        input.style.color = 'red'

        setTimeout(() => {
            input.style.color = ''
        }, 5000)
    }


    const validate = (input) => {

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {
            showUncorrectInput(input)
            showSubmitStatus(notValidText)
        } else return true

    }


    const sendToTelegram = (data) => {
        const URI_API = `https://api.telegram.org/bot5441053399:AAHmtB5dRwz1LnS692orcmhVk3U06vzRUkA/sendMessage`

        let message = `<b> Заявка с сайта Funiro </b>\n`;
        message += `<b>Почта: ${data.email}  </b>`;

        axios.post(URI_API, {
            chat_id: '-677057242',
            parse_mode: 'html',
            text: message
        })
    }

    const submitData = () => {
        const formInput = form.querySelector('input')
        const formBody = {}

        showSubmitStatus(loadText)

        formBody.email = formInput.value


        if (validate(formInput)) {

            sendToTelegram(formBody)
            showSubmitStatus(successText)

            setTimeout(() => {

                // closeModal(document.querySelector('.alert'), 'alert-hidden')
                statusBlock.textContent = ''
                // closeModal(document.querySelector('.feedback'), 'feedback-hidden');
                // closeModal(document.querySelector('.authorization'), 'authorization-hidden');

            }, 5000)

            formInput.value = ''

        } else {
            console.log('данные не валидны');
        }
    }


    try {
        if (!form) {
            throw new Error('верните форму')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitData()
        })
    } catch (error) {
        console.log(error.message);
    }






}