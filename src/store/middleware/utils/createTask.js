import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

export default async function createTask({
  fork,
  dispatch,
  search,
  action,
  textLoading,
  textSucess,
  textErro,
}) {
  toast({
    title: 'Carregando',
    description: textLoading,
    status: 'loading',
    duration: 2000,
    isClosable: true
  });
  const task = fork(async api => {
    await api.delay(1000);
    return await search();
  });

  const response = await task.result;

  if (response.status === 'ok') {
    toast({
      title: 'Sucesso!',
      description: textSucess,
      status: 'success',
      duration: 2000,
      isClosable: true
    });
    dispatch(action(response.value));
  }

  if (response.status === 'rejected') {
    toast({
      title: 'Erro',
      description: textErro,
      status: 'error',
      duration: 2000,
      isClosable: true
    });
  }
}