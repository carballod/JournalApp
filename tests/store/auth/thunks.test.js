import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures"

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThunks", () => {

  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks() );

  test("Debe invocar el checkingCredentials", async () => {

    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

  });

  test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async() => {

    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue( loginData );
    // thunk
    await startGoogleSignIn()( dispatch );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

  })

  test('startGoogleSignIn debe llamar checkingCredentials y login - Error', async() => {

    const loginData = { ok: false, errorMessage: "Error en el login" };
    await singInWithGoogle.mockResolvedValue( loginData );
    // thunk
    await startGoogleSignIn()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) );

  })

  test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito', async() => {

    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue( loginData );

    await startLoginWithEmailPassword( formData )( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

  })

  test('startLoginWithEmailPassword debe llamar checkingCredentials y login - Error', async() => {

    const loginData = { ok: false, errorMessage: "Error en el login" };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue( loginData );

    await startLoginWithEmailPassword( formData )( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData ) );

  })

  test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => {

    await startLogout()( dispatch );

    expect( logoutFirebase ).toHaveBeenCalledWith();
    expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
    expect( dispatch ).toHaveBeenCalledWith( logout() );

  })

});
