import { validateForms } from '../functions/validateForms';
import vars from '../_vars';

const { firstForm } = vars;

const rules1 = [

    {
        ruleSelector: '.input-company',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'The field must contain at least 3 characters'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Enter your company!'
            }
        ]
    },
    {
        ruleSelector: '.input-email',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'The field must contain at least 3 characters'
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Enter your email!'
            },
            {
                rule: 'email',
                value: true,
                errorMessage: 'Enter correct email!'
            }
        ]
    },
    {
        ruleSelector: '.input-telegram',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'The field must contain at least 3 characters'
            }
        ]
    },
    {
        ruleSelector: '.input-skype',
        rules: [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'The field must contain at least 3 characters'
            }
        ]
    },
];

const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms(firstForm, rules1, afterForm);