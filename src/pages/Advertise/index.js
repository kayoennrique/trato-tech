import Header from "components/Header";
import { useSelector } from "react-redux";
import styles from './Advertise.module.scss'
import Button from "components/Button";
import { useForm } from "react-hook-form";


export default function Advertise() {
    const categories = useSelector(state => state.categories.map(({ name, id }) => ({ name, id })));
    const {register, handleSubmit } = useForm();

    function cadastre(param) {
        console.log('param: ', param);
    }

    return (
        <div className={styles.container}>
            <Header
                title='Anuncie aqui'
                description='Anuncie seu produto no melhor site do Brasil!'
            />
            <form className={styles.form} onSubmit={handleSubmit(cadastre)}>
                <input {...register('name')}
                    placeholder="Nome do produto"
                    alt='Nome do produto'
                />
                <input {...register('description')}
                    placeholder='Descrição do produto'
                    alt='Descrição do produto'
                />
                <input {...register('image')}
                    placeholder='URL da imagem do produto'
                    alt='URL da imagem do produto'
                />
                <select {...register('categorie')}>
                    <option value='' disabled >
                        Selecione a categoria
                    </option>
                    {categories.map(categorie => (
                        <option
                            key={categorie.id}
                            value={categorie.id}>
                            {categorie.name}
                        </option>
                    ))}
                </select>
                <input {...register('price')} type='number' placeholder='Preço do produto' />
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    );
}