import { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";

const useApiError = () => {
    const handleError = (error : AxiosError) => {
        if(error.response) {
            let errorMessage = ''
            const errorCode = error.response.status
            if(errorCode === 403) errorMessage = "유저의 권한이 없습니다."
            else if(errorCode === 429) errorMessage = "너무 많이 요청했습니다. 잠시 뒤에 다시 시도해주세요."
            else if(errorCode) errorMessage = "서버에 알 수 없는 오류가 발생했습니다."
            toast.error(errorMessage, {toastId : 'error'});
        }
    }

    return { handleError };
}

export default useApiError;