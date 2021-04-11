import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

const StyledSearchBar = styled(Search)`
  max-width: 500px;
  margin: 20px auto;
  .ant-btn-primary {
    background-color: #1d3557;
    border-color: #1d3557;
  }
  .ant-input-affix-wrapper {
    &:not(.ant-input-affix-wrapper-disabled) {
      &:hover .ant-input-affix-wrapper {
        border-color: #1d3557;
        border-right-width: 0 !important;
        box-shadow: none;
      }
    }
    &:focus,
    &:hover {
      border-color: #1d3557;
      border-right-width: 0 !important;
      box-shadow: none;
    }
  }
`;

export default StyledSearchBar;
