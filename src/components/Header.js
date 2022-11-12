import styled from "styled-components";

export const StyledHeader = styled.div`

    .crop {
        height: 230px;
        overflow: hidden;
    }
    
    .banner {
        width: 100%;
        margin-top: -22%;
    }
    
    .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    @media screen and (max-width: 992px) {
        .banner {
            margin-top: 0;
        }
    }
`;