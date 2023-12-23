import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import ReactPlayer from 'react-player/youtube'
import { useNavigate } from 'react-router-dom'

const queryClient = useQueryClient()

export const makeCompleteMutation = useMutation({
  mutationFn: api.updateNumberCompleted,
  onSuccess: async()=>{
    queryClient.invalidateQueries({queryKey:['dances', 'completed', id]})
  }
})