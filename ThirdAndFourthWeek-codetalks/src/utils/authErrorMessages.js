export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi veya şifre!';

    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı!';

    case 'auth/user-not-found':
      return 'Geçersiz e-posta adresi veya şifre!';

    case 'auth/weak-password':
      return 'Güvensiz Şifre!';

    case 'auth/wrong-password':
      return 'Geçersiz e-posta adresi veya şifre!';

    case 'auth/email-already-in-use':
      return 'Bu e-posta adresi daha önce kayıt edilmiş.';

    case 'auth/unknown':
      return 'Bir hata oluştu. İnternet bağlantınızı kontrol edin.';

    case 'auth/network-request-failed':
      return 'Bir hata oluştu. İnternet bağlantınızı kontrol edin.';

    default:
      return errorCode;
  }
}
