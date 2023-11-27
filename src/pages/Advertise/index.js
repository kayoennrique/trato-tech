import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from './Advertise.module.scss'
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { registerItem } from "store/reducers/items";
import { useParams } from "react-router-dom";
import Input from "components/Input";


export default function Advertise() {
    const dispatch = useDispatch();
    const { nameCategorie = '' } = useParams();
    const categories = useSelector(state => state.categories.map(({ name, id }) => ({ name, id })));
    const { register, handleSubmit } = useForm({
        defaultValues: {
            categorie: nameCategorie
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
                <Input
                    {...register('title', { required: true })}
                    placeholder="Nome do produto"
                    alt='Nome do produto'
                />
                <Input
                    {...register('description', { required: true })}
                    placeholder='Descrição do produto'
                    alt='Descrição do produto'
                />
                <Input
                    {...register('photo', { required: true })}
                    placeholder='URL da imagem do produto'
                    alt='URL da imagem do produto'
                />
                <select
                    {...register('categorie', { required: true })}
                    disabled={nameCategorie}
                >
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
                <Input {...register('price', { required: true, valueAsNumber: true })} type='number' placeholder='Preço do produto' />
                <Button type='submit'>
                    Cadastrar produto
                </Button>
            </form>
        </div>
    );
}