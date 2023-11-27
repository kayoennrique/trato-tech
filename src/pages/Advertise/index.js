import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from './Advertise.module.scss'
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { registerItem } from "store/reducers/items";


export default function Advertise() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.map(({ name, id }) => ({ name, id })));
    const { register, handleSubmit } = useForm({
        defaultValues: {
            categorie: ''
        } 
    });

    function cadastre(data) {
        dispatch(registerItem(data));
    }

    return (
        <div className={styles.container}>
            <Header
                title='Anuncie aqui'
                description='Anuncie seu produto no melhor site do Brasil!'
            />
            <form className={styles.form} onSubmit={handleSubmit(cadastre)}>
                <input {...register('name', { required: true })}
                    placeholder="Nome do produto"
                    alt='Nome do produto'
                />
                <input {...register('description', { required: true })}
                    placeholder='Descrição do produto'
                    alt='Descrição do produto'
                />
                <input {...register('image', { required: true })}
                    placeholder='URL da imagem do produto'
                    alt='URL da imagem do produto'
                />
                <select {...register('categorie', { required: true })}>
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
                <input {...register('price', { required: true })} type='number' placeholder='Preço do produto' />
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    );
}