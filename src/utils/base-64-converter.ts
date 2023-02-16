// o jwt é divido em cabeçalho, corpo, e por ultimo as informações de segurança.
// o corpo ta em base 64, nós vamos pegar esse base 64 e pegar um objeto que ta dentro dele.
import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';

export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayload | undefined => {
  const authorizationSplited = authorization.split('.');

  if (authorizationSplited.length < 3 || !authorization[1]) return undefined;

  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
};
